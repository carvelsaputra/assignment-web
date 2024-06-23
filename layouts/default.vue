<!-- DEFAULT LAYOUT -->
<template>
  <NuxtLoadingIndicator />

  <v-app>
    <!-- APP TOOLBAR -->
    <AppBar />
    <!-- MAIN -->
    <v-main>
      <!-- THE PLACE WHEN DYNAMIC CONTENT BE LOADED -->
      <slot />
    </v-main>
  </v-app>
</template>
