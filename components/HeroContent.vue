<template>
  <section class="flex  md:mx-16 relative h-[80vh]  mb-10">
    <SocialIcons />
    <div class=" w-full   sm:w-1/2  flex flex-col justify-center       relative  ">
      <div class="mb-4 md:mx-24  flex-col flex gap-5 sm:gap-3  md:gap-4   justify-center">
        <p class=" text-4xl md:text-6xl font-bold text-center md:text-start">
          Luis Arteaga
        </p>
        <p class="text-md md:text-md font-semibold capitalize text-center md:text-start">
          Desarrollador front end
        </p>
        <StackIcons />
      </div>
    </div>
    <div class=" hidden sm:visible  avatar-wrapper w-1/2  flex  items-center justify-center">
      <div class=" h-56 w-56  rounded-full  " />
    </div>
  </section>
</template>

<style>
.avatar-wrapper div {
  background-image: url('../assets/avatar.jpeg');
  background-position: top;
  background-size: cover;
}
</style>
