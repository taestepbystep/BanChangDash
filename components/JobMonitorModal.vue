<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg max-h-screen-80 lg:w-8/12">
            <div class="px-6 py-4 text-left">
                <!-- header -->
                <div class="flex items-center justify-center my-5 mb-5">
                    <p class="text-2xl font-bold text-center text-blue-500">JBI-0001</p>
                </div>
                
                <!-- main -->
                <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
                    <!-- contianer name -->
                    <div class="flex justify-center md:col-span-6">
                        <div class="flex w-full p-4 mb-3 border border-gray-300">
                            <div class="w-5/6 px-2">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">กราฟอุณหภูมิ</label>
                                <LineChart :height="128" />
                            </div>
                            <div class="flex items-center justify-center w-1/6">
                                <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                    35°C
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center md:col-span-6">
                        <div class="flex w-full p-4 mb-3 border border-gray-300">
                            <div class="w-5/6 px-2">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">กราฟความชื้น</label>
                                <LineChart :chart-data="chartData" :height="128" />
                            </div>
                            <div class="flex items-center justify-center w-1/6">
                                <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                    35 %
                                </h4>
                            </div>
                        </div>
                    </div>

                    <!-- Route -->
                    <div class="flex justify-center md:col-span-12">
                        <div class="grid w-full grid-cols-1 gap-4 p-5 rounded-md md:grid-cols-12">
                            <div class="w-full md:space-x-2 md:flex md:col-span-12">
                                <!-- route name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ชื่อเส้นทาง*</label>
                                    <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                                </div>
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
                            <!-- longdo map route -->
                            <div class="flex justify-center w-full md:col-span-12">
                                <div class="w-full mb-3">
                                    <div class="border border-gray-300 border-solid rounded ">
                                        <div class="w-full h-64">
                                            <longdo-map :input="false"></longdo-map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Container -->
                    <div class="flex justify-center md:col-span-6">
                        <div class="grid w-full grid-cols-1 gap-4 p-5 rounded-md lg:grid-cols-12">
                            <!-- contianer picture -->
                            <div class="flex justify-center lg:col-span-9">
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                                    <div class="py-3 border border-gray-300 border-solid rounded">
                                        <img 
                                        class="object-contain w-5/6 h-32 mx-auto" 
                                        src="https://packer.searates.com/images/main-container.png" 
                                        alt="profile picture" 
                                        loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:col-span-3">
                                <!-- contianer name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">รหัสตู้*</label>
                                    <input disabled value="CTN-0001" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                                </div>
                                <!-- contianer size -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                                    <input disabled value="20" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Truck -->
                    <div class="flex justify-center md:col-span-6">
                        <div class="grid w-full grid-cols-1 gap-4 p-5 rounded-md lg:grid-cols-12">
                            <!-- truck picture -->
                            <div class="flex justify-center lg:col-span-9">
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">รูปรถบรรทุก*</label>
                                    <div class="py-3 border border-gray-300 border-solid rounded ">
                                        <img 
                                        class="object-contain w-5/6 h-32 mx-auto" 
                                        src="https://pngimg.com/uploads/truck/truck_PNG16269.png" 
                                        alt="profile picture" 
                                        loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:col-span-3">
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
                        </div>
                    </div>

                    
                </div>
                
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
                chartData: {
                    labels: [
                        "0",
                        "10",
                        "20",
                        "30",
                        "40",
                        "50",
                        "60",
                        "0",
                        "10",
                        "20",
                        "30",
                        "40",
                        "50",
                        "60",
                    ],
                    datasets: [
                        {
                            borderColor: "#ef4444",
                            backgroundColor: "#ef4444",
                            data: [80, 39, 10, 40, 12, 80, 35, 12, 39, 16, 40, 48, 80, 48],
                        },
                    ],
                },
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

<style>
    #map {
        height: 100%;
    }
</style>