<template>
  <div class="profile-section">
    <v-row align="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="240" class="profile-avatar mb-4">
          <v-img
            src="../../../public/assets/images/sample-profile.jpeg"
            alt="Profile Image"
          />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h3 font-weight-bold mb-4 text-accent">Tom</h1>

        <div class="self-introduction mb-6">
          <h2 class="text-h5 font-weight-medium mb-2 text-secondary">
            Self Introduction
          </h2>
          <p class="text-body-1">Sample</p>
        </div>

        <div class="professional-introduction">
          <h2 class="text-h5 font-weight-medium mb-2 text-secondary">
            Professional Introduction
          </h2>
          <p class="text-body-1">sample</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.profile-avatar {
  border: 4px solid variables.$orange;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
