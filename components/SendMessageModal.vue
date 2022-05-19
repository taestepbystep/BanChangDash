<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg md:w-1/2 lg:w-1/3">
            <div class="px-6 py-4">
                <!-- close icon -->
                <div class="w-full">
                    <button @click="close_modal()" class="flex ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-auto text-gray-500 hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- header -->
                <div class="flex items-center justify-center mb-5 -mt-4">
                    <p class="text-2xl font-bold text-center">ส่งข้อความ</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- vehicle registration number -->
                        <div class="flex justify-content-evenly md:col-span-2">
                            <div class="w-full my-5 whitespace-nowrap">
                                <div class="flex justify-between">
                                    <p class="w-full text-gray-500">ไอดีคนขับ :</p>
                                    <p class="w-full font-bold text-blue-700 hover:underline">DVT-0001</p>
                                </div>
                                <div class="flex">
                                    <p class="w-full text-gray-500">ชื่อ :</p>
                                    <p class="w-full font-bold">มงคล ดวงดาว</p>
                                </div>
                                <div class="flex">
                                    <p class="w-full text-gray-500">เบอร์โทร :</p>
                                    <p class="w-full font-bold">0972546647</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="flex justify-center md:col-span-2">
                            <div class="w-full mb-3">
                                <label class="inline-block mb-2 text-gray-500">ส่งข้อความถึงคนขับรถ</label>
                                <textarea class="w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" placeholder="Your message">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    
                    <!-- submit button -->
                    <div class="">
                        <button type="submit" class="flex items-center justify-center px-6 py-2 mx-auto text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                            <span class="m-2 text-white">ส่งข้อความ</span>
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "NewDriverModal",

        props: {
            show: Boolean
        },
        data() {
            return{
                 selectRoute: false,
                 driver: "",
                 truck: "",
                 gender: "",
                 container: "",
                 origin: "",
                 desination: ""
            }
        },

        methods:{
            close_modal() {
                this.$emit("close")
            },
            onSubmit(){
                this.close_modal()
            }
        }
    }
</script>
