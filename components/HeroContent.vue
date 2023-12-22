<template>
  <section class="flex flex-col justify-center  h-[80vh] mx-16  relative  mb-10">
    <div class=" mx-24  flex-col flex gap-4   justify-center">
      <p class=" text-6xl font-bold">
        Luis Arteaga
      </p>
      <p class="text-md font-semibold capitalize">
        Desarrollador front end
      </p>
      <div class="flex gap-3 ">
        <Icon size="25" name="devicon:typescript" color="black" />
        <Icon size="25" name="logos:vue" color="black" />
        <Icon size="25" name="logos:flutter" color="black" />
        <Icon size="25" name="logos:nuxt-icon" color="black" />
      </div>
    </div>
    <div class="flex justify-end gap-5 absolute bottom-0 w-full">
      <UTooltip text="Github">
        <a
          href="https://github.com/ledarteaga
        "
          target="_blank"
        >
          <Icon size="25" name="mdi:github" color="white" /></a>
      </UTooltip>
      <UTooltip text="LinkedIn">
        <a
          href="https://linkedin.com/in/luis-a-90a5a4193
        "
          target="_blank"
        >
          <Icon size="25" name="mdi:linkedin" color="white" />
        </a>
      </UTooltip>
    </div>
  </section>
</template>
