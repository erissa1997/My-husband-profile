<template>
  <div class="profile-section">
    <v-row align="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="240" class="elevation-4 border-thin mb-4">
          <v-img
            src="../../../public/assets/images/sample-profile.jpg"
            alt="Profile Image"
          />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h4 mb-4 text-accent">Thomás Rodrigues Crespo</h1>

        <div class="self-introduction mb-6">
          <h2 class="text-h4.5 mb-2 text-accent">About me</h2>
          <p class="text-body-1">An AI researcher with Brazilian roots and over 8 years in Japan, I've navigated a journey from engineering physics to machine learning, fueled by a commitment to give back to society. My international background—spanning Brazil, Canada, and Japan—has shaped both my research perspective and cultural fluency, enabling me to bridge disciplines and communicate complex ideas across barriers. Whether developing facial recognition systems for macaques, designing LLM-based playwriting tools, or developing theoretical concepts, I'm driven by a consistent vision: creating AI systems that serve humanity through robust, reliable, and trustworthy design.</p>
        </div>

        <div class="professional-introduction">
          <h2 class="text-h4.5 mb-2 text-accent">Professional Introduction</h2>
          <p class="text-body-1">I am a Machine Learning Ph.D. from Kyoto University specializing in Trustworthy AI, with theoretical expertise in robustness evaluation through my Smoothed Robustness Analysis framework that unifies adversarial and noise robustness—research published in TMLR. I have in my theoretical toolkit experience with probability theory, information theory, information geometry, linear algebra and signal processing. On the practical side, I bring hands-on proficiency in Python, PyTorch, TensorFlow, and cloud platforms, having implemented complete ML pipelines from RAG systems to LLM fine-tuning for real-world applications spanning primatology and theatrical arts. This balance of theoretical depth and practical implementation experience enables me to bridge the gap between advanced research and functional solutions, while my communication skills—refined through international presentations, technical seminars, and work as a senior tour guide—allow me to effectively translate complex AI concepts across disciplines, facilitating the collaborative development of trustworthy systems that address genuine human needs.</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>
