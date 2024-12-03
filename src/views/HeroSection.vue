<template>
  <div class="max-w-[1920px] h-screen bg-white relative p-5">
    <h1 class="text-2xl font-semibold text-gray-800">Add Product</h1>
    <div>
      <button
        @click="isadd = !isadd"
        class="bg-red-500 w-auto py-3 mx-auto rounded px-5"
      >
        Add
      </button>
    </div>
    <div
      v-if="isadd == false"
      class="w-full h-screen bg-black bg-opacity-50 fixed top-0 right-0 flex items-center justify-center"
    >
      <form
        @submit.prevent="handleaddstudent"
        class="bg-white space-y-4 p-5 shadow-md rounded-md w-1/2 flex flex-col"
      >
        <input
          v-model="Stid"
          type="text"
          required
          placeholder="id"
          class="border-2"
        />
        <input
          required
          v-model="Stname"
          type="text"
          placeholder="name"
          class="border-2"
        />
        <input
          required
          v-model="Stage"
          type="text"
          placeholder="age"
          class="border-2"
        />
        <button type="submit" class="bg-red-500 w-auto mx-auto rounded px-5">
          Add
        </button>
        <button
          @click="isadd = !isadd"
          class="bg-red-500 w-auto mx-auto rounded px-5"
        >
          cancel
        </button>
      </form>
    </div>
    <h1  v-if="students.length > 0">Total Items in Catectory {{ students.length }}</h1>
    <!-- Card -->
    <div
      v-if="students.length > 0"
      class="w-[90%] h-auto px-5 py-2 grid grid-cols-3 gap-3 bg-indigo-50 rounded-md mt-12"
    >
    <!-- Dinamix class line 4-->
      <div
        v-for="(student, index) in students"
        :key="index"
        class="bg-white shadow-md mx-2 h-32 space-y-2 w-auto rounded-md p-5 text-white"
        :class="{'bg-green-500':student.newAge<=21}"

      >
        <div class="flex w-auto gap-4 text-lg text-gray-800 items-center">
          <h1>{{ student.newID }}</h1>
          <h1>{{ student.newName }}</h1>
          <h1>{{ student.newAge }}</h1>
          <button @click="deleteAB(index)" class="bg-red-500 rounded px-2">
            Delete
          </button>
          <button @click="edit(student)" class="bg-pink-500 rounded px-2">
            edit
          </button>
        
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Empty is Item</h1>
    </div>
    <!-- End Card-->
      <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ selectedPerson.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ person.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
  
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
export default {
  components: {
      Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  },
  setup() {
    const students = ref([
      {
        newID: 1,
        newName: "Toka",
        newAge: 21,
      },
    ]);
    const deleteAB = (index) => {
      students.value.splice(index, 1);
    };
    const Stid = ref("");
    const Stname = ref("");
    const Stage = ref("");
    const handleaddstudent = () => {
      const newstudent = {
        newID: Stid.value,
        newName: Stname.value,
        newAge: Stage.value,
      };
      students.value.push(newstudent);
      isadd.value = !isadd.value;
      Stid.value = "";
      Stname.value = "";
      Stage.value = "";
    };
    const isadd = ref(true);
    // edit ////
    const edit = (item) => {
      Stid.value = item.newID ;
      Stname.value = item.newName ;
      Stage.value = item.newAge;
      isadd.value = !isadd.value;
      students.value.splice(item, 1);
      
    }

    const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
    ]
const selectedPerson = ref(people[0])

    return { students, deleteAB, Stid, Stname, Stage, handleaddstudent, isadd ,edit , people , selectedPerson};
  },
};
</script>
