<template>
  <v-container>
    <v-card variant="elevated" class="mx-auto">
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">👋 Welcome</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="elevated" color="primary" to="/register">Register</v-btn
        ><v-btn variant="elevated" color="warning" to="/login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
