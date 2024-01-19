<script setup lang="ts">
import {InputProps, InputType} from "./myInput"

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  type: InputType.TEXT,
  modelValue: {},
  label: "",
  size: "m",
})
interface Emit {
  (e: 'update:modelValue', value: string | number): void
}
const emit = defineEmits<Emit>();

const castedModel = ref<string | number | undefined>();

const validate = (input: string): boolean => {
  if(!input){
    return false;
  }
  if (props.type === InputType.NUMBER) {
      return !isNaN(Number(input.toString()));
  } 
  return true;
}

const handleInput = (event: Event) => {
  
    if(!validate((event.target as HTMLInputElement).value)){
      return;
    }
    const rawValue = (event.target as HTMLInputElement).value;
    castedModel.value = castValue(rawValue);
    emit('update:modelValue', castedModel.value);
}

const castValue = (rawValue: any): string | number => {
    if (props.type === InputType.NUMBER) {
        return Number(rawValue);
    } else if (props.type === InputType.TEXT) {
        return String(rawValue);
    } 
    return "";
}

onMounted(() => {
  castedModel.value = castValue(props.modelValue);
})

</script>
<template>
  <div class="grid">
    <div v-if="label" class="col mt-2">
        {{ label }}
    </div>
    <div class="col">
      <input :class="['my-inputtext', size]" :value="castedModel"   @input="handleInput" :disabled="disabled" :type="type"/>
    </div>
  </div>
</template>
<style lang="css" scoped>


.my-component, .my-component * {
    box-sizing: border-box;
}

.my-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #495057;
    background: #ffffff;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    appearance: none;
    border-radius: 4px;
}

.my-inputtext:focus {
      outline: 0 none;
      outline-offset: 0;
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);

}

input[type="number" i] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Define styles for each size */
.xs {
  width: 50px;
}

.s {
  width: 100px;
}

.m {
  width: 150px;
}

.l {
  width: 200px;
}

.xl {
  width: 250px;
}
</style>