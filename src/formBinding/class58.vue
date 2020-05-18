<template>
 <div>
  <v-container fluid>
   <h1>Form Binding Values</h1>
   <!-- Checkbox -->
   <v-checkbox
    v-model="checkbox"
    label="Checkbox"
    :true-value="a"
    :false-value="b">
  </v-checkbox>
  <!-- Radio -->
  <v-radio-group
   v-model="radio">
   <v-radio
    label="Radio 1"
    :value="b"
    >
   </v-radio>
   <v-radio
    label="Radio 2"
    :value="a"
    >
   </v-radio>
   <v-radio
    label="Radio 3"
    :value="[1,2,3,4,5]"
    >
   </v-radio>
  </v-radio-group>
   <!-- Select -->
   <v-select
    v-model="select" 
    :hint="`${select.option}: ${select.value}`" 
    :items="options"
    item-text="option"
    item-value="value"
    label="Select one"
    persistent-hint
    return-object
    >
   </v-select>
   <v-select
    v-model="select2" 
    :hint="`${select2.option}: ${select2.value}`" 
    :items="options"
    item-text="option"
    item-value="value"
    label="Select two"
    persistent-hint
    return-object
    >
   </v-select>
  </v-container>
  <pre> {{ $data }} </pre>
 </div>
</template>
<script>
export default {
 data(){
  return {
   checkbox: null,
   radio: null,
   select: '',
   select2:{ option: 'Hola', value: 'This means: Hi2'},
   a: { value: 'checked' },
   b: { value: 'unchecked' },
   options:[
    { option:'Hola', value:'This means: Hi'},
    { option:'Chao', value:'This means: Bye'},
    { option:'Como estas?', value:'This means: How are you?'},
   ]
  }
 }
}
</script>