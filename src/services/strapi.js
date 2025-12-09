// src/utils/strapi.js

// Backend URL (for development and production)
const BASE_URL =
  window.location.hostname === "localhost"
    ? `${process.env.REACT_APP_STRAPI_URL || "http://localhost:1337"}/api`
    : "https://clinicbackend-1.onrender.com/api";

/**
 * Generic Strapi fetcher (public API — no secret headers)
 */
async function fetchFromStrapi(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}?populate=*`);

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return (await res.json()).data;
}

/** EDUCATIONAL VIDEOS */
export async function fetchEducationalVideos() {
  const data = await fetchFromStrapi("educational-videos");
  return data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
}

/** EVENTS */
export async function fetchEvents() {
  const res = await fetch(
    `${BASE_URL}/events?populate[Events][populate][Thumbnail]=true&populate[Events][populate][gallery]=true&populate[Events][populate][videoFile]=true`
  );

  if (!res.ok) throw new Error("Failed to fetch events");
  const json = await res.json();

  return json.data.map((e) => ({
    id: e.id,
    Date: e.attributes.Date,
    location: e.attributes.location,
    Events: e.attributes.Events.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      videoLink: item.videoLink,
      postLink: item.postLink,

      Thumbnail: item.Thumbnail?.data
        ? {
            url: item.Thumbnail.data.attributes.url,
            formats: item.Thumbnail.data.attributes.formats,
          }
        : null,

      gallery: item.gallery?.data
        ? item.gallery.data.map((img) => ({
            url: img.attributes.url,
            formats: img.attributes.formats,
          }))
        : [],

      videoFile: item.videoFile?.data
        ? { url: item.videoFile.data.attributes.url }
        : null,
    })),
  }));
}

/** PODCASTS */
export async function fetchPodcasts() {
  const res = await fetch(
    `${BASE_URL}/podcasts?populate[Podcast][populate][Thumbnail]=true&populate[Podcast][populate][gallery]=true&populate[Podcast][populate][videoFile]=true`
  );

  if (!res.ok) throw new Error("Failed to fetch podcasts");
  const json = await res.json();

  return json.data.map((p) => {
    const pod = p.attributes.Podcast;

    let embed = pod.videoLink;
    if (embed?.includes("watch?v="))
      embed = embed.replace("watch?v=", "embed/").split("&")[0];
    else if (embed?.includes("youtu.be/"))
      embed =
        "https://www.youtube.com/embed/" +
        embed.split("youtu.be/")[1].split("?")[0];

    return {
      id: p.id,
      guestName: p.attributes.guestName,
      guestDesignation: p.attributes.guestDesignation,
      createdAt: p.attributes.createdAt,
      updatedAt: p.attributes.updatedAt,

      Podcast: {
        title: pod.title,
        description: pod.description,
        videoLink: pod.videoLink,
        embedUrl: embed,

        Thumbnail: pod.Thumbnail?.data
          ? {
              url: pod.Thumbnail.data.attributes.url,
              formats: pod.Thumbnail.data.attributes.formats,
            }
          : null,

        gallery: pod.gallery?.data
          ? pod.gallery.data.map((img) => ({
              url: img.attributes.url,
              formats: img.attributes.formats,
            }))
          : [],

        videoFile: pod.videoFile?.data
          ? { url: pod.videoFile.data.attributes.url }
          : null,
      },
    };
  });
}

/** TESTIMONIALS */
export async function fetchTestimonials() {
  const res = await fetch(
    `${BASE_URL}/testimonials?populate[Testimonial][populate][Thumbnail]=true&populate[Testimonial][populate][gallery]=true&populate[Testimonial][populate][videoFile]=true`
  );

  if (!res.ok) throw new Error("Failed to fetch testimonials");
  const json = await res.json();

  return json.data.map((t) => ({
    id: t.id,
    patientName: t.attributes.patientName,
    Testimonial: {
      ...t.attributes.Testimonial,
      Thumbnail: t.attributes.Testimonial.Thumbnail?.data
        ? t.attributes.Testimonial.Thumbnail.data.attributes
        : null,
      gallery: t.attributes.Testimonial.gallery?.data
        ? t.attributes.Testimonial.gallery.data.map((g) => g.attributes)
        : [],
      videoFile: t.attributes.Testimonial.videoFile?.data
        ? t.attributes.Testimonial.videoFile.data.attributes
        : null,
    },
  }));
}

/** ACHIEVEMENTS */
export async function fetchAllAchievements() {
  const data = await fetchFromStrapi("achievements"); // plural
  return data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
}

