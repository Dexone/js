<template>










    <form class="max-w-sm mx-auto" v-if="(Object.values(state2).join('')) !== '1111'">
        <label class="block mb-2 text-sm font-medium text-gray-900">Админ-панель</label>
        <p class="mb-2 text-sm text-gray-500 ">Введите ключ доступа</p>
        <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
                <input v-model="state.input1" type="text" maxlength="1" id="code-1"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="state.input2" @keydown.delete="inp1focus()" type="text" maxlength="1" id="code-2"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ">
            </div>
            <div>
                <input v-model="state.input3" @keydown.delete="inp2focus()" type="text" maxlength="1" id="code-3"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="state.input4" @keydown.delete="inp3focus(), state.input4 = ''" type="text" maxlength="1"
                    id="code-4"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>

        </div>

    </form>
    <div>
    </div>






</template>

<script setup>

import { useStorage } from '@vueuse/core'






const theDefault = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
}
const state = useStorage('vue-use-local-storage', theDefault)
const state2 = useStorage('vue-use-local-storage', theDefault)
watch(state2, () => {

    if (state2.value.input1 > 0) {
        inp2focus()
    }
    if (state2.value.input2 > 0) {
        inp3focus()
    }
    if (state2.value.input3 > 0) {
        inp4focus()
    }
});
function inp1focus() {
    document.getElementById('code-1').focus();
}
function inp2focus() {
    document.getElementById('code-2').focus();
}
function inp3focus() {
    document.getElementById('code-3').focus();
}
function inp4focus() {
    document.getElementById('code-4').focus();
}








</script>
