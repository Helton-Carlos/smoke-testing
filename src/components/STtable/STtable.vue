<script setup lang="ts">
</script>

<template>
  <div class="max-w-2xl mt-4 mx-auto">
    <div class="flex flex-col">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden ">
            <table class="min-w-full divide-y table-fixed">
              <thead class="bg-sky-700">
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  text-white uppercase">
                    Nome
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  text-white uppercase">
                    Número
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  text-white uppercase">
                    Linkedin
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y text-white dark:bg-gray-800">
                <tr class="text-white">
                  <td class="py-4 px-6 text-sm font-medium  text-white whitespace-nowrap">Helton</td>
                  <td class="py-4 px-6 text-sm font-medium  text-white whitespace-nowrap">(75) 98866-9858
                  </td>
                  <td class="py-4 px-6 text-sm font-medium  text-blue-200 whitespace-nowrap"><a
                      href="https://www.linkedin.com/in/helton-brito-856ba516b/">Helton Brito</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>