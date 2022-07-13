<script>
export default {
  name: 'About',
  data() {
    return {
      center: { lat: 32.0853, lng: 34.7818 },
      markers: [
        {
          position: { lat: 32.434, lng: 34.9197 },
          location: 'Hadera',
        },
        {
          position: { lat: 32.0132, lng: 34.748 },
          location: 'Tel-Aviv',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="about-page">
    <h1>This is an about page</h1>
  </div>
  <GMapMap
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 50vw; height: 50vh"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      >
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
  <section>
    <h2>Locations</h2>
    <button
      v-for="marker in markers"
      :key="marker"
      @click="center = marker.position"
    >
      {{ marker.location }}
    </button>
  </section>
</template>
