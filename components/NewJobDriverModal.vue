<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg max-h-screen-80 lg:w-6/12">
            <div class="px-6 py-4 text-left">
                <!-- header -->
                <div class="flex items-center justify-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มงาน</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 gap-4 p-5 rounded-md md:grid-cols-2">
                        <!-- longdo map route -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">แผนที่*</label>
                                <div class="py-3 border border-gray-300 border-solid rounded ">
                                    <div class="w-full h-24 mb-3">
                                        <longdo-map :input="false"></longdo-map>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full">
                            <!-- route name -->
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ชื่อเส้นทาง*</label>
                                <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                            </div>
                            <!-- origin name -->
                            <div class="w-full mb-3 md:space-x-2 md:flex">
                                 <!-- origin name -->
                                <div class="w-full">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ต้นทาง*</label>
                                    <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                                </div>
                                 <!-- desination name -->
                                <div class="w-full">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ปลายทาง*</label>
                                    <input disabled value="เชียงใหม่" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                                </div>
                            </div>
                           
                        </div>

                        <!-- truck picture -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">รูปรถบรรทุก*</label>
                                <div class="py-3 border border-gray-300 border-solid rounded ">
                                    <img 
                                    class="object-contain w-5/6 h-24 mx-auto" 
                                    src="https://pngimg.com/uploads/truck/truck_PNG16269.png" 
                                    alt="profile picture" 
                                    loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <!-- vehicle registration number -->
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ทะเบียนรถ*</label>
                                <input disabled value="3กจ 1589" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                            </div>
                            <!-- number of wheels -->
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">จำนวนล้อ*</label>
                                <input disabled value="4" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="4">
                            </div>
                        </div>

                        <!-- contianer picture -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                                <div class="py-3 border border-gray-300 border-solid rounded">
                                    <img 
                                    class="object-contain w-5/6 h-24 mx-auto" 
                                    src="https://packer.searates.com/images/main-container.png" 
                                    alt="profile picture" 
                                    loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <!-- contianer name -->
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">หมายเลขตู้คอนเทนเนอร์*</label>
                                <input disabled value="CTN-0001" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                            </div>
                            <!-- contianer size -->
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                                <input disabled value="20" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                            </div>
                        </div>
                    </div>

                    <!-- submit button -->
                    <div class="mt-6">
                        <button type="submit" class="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <span class="m-2 text-white">เพิ่ม</span>
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
                this.$router.push('job')
            }
        }
    }
</script>