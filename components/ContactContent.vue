<template>
  <div class="h-[50vh] w-1/3 m-auto my-20">
    <h3 class="font-bold text-3xl  leading-loose">
      Contact me
    </h3>

    <UForm :state="{}" class="space-y-4">
      <UFormGroup label="Name" name="name">
        <UInput />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput />
      </UFormGroup>

      <UFormGroup label="Message" name="message">
        <UTextarea />
      </UFormGroup>

      <UButton type="submit" class="w-full text-center">
        Submit
      </UButton>
    </UForm>
  </div>
</template>
