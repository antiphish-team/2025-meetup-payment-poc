<script setup lang="ts">
import {
    User,
} from '@element-plus/icons-vue'
const route = useRoute()

const { data } = await useFetch('/api/license', {
    method: 'POST',
    body: {
        name: route.query.name,
        email: route.query.email
    },
})
const tableData = [data.value]
</script>


<template>
    <div>
        <div class="header">
            <nuxt-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="141" height="24" viewBox="0 0 141 24" fill="none">
                    <g clip-path="url(#clip0_15_487)">
                        <path
                            d="M19.1416 18.725L11.1063 7.03824L0.40564 22.5988H41.9737L26.7662 0.483398L17.6899 13.6794L19.1416 18.725Z"
                            fill="#4A00EF" />
                        <path
                            d="M88.7155 9.73766C88.5821 9.77428 88.5951 9.77167 88.4591 9.80829C84.8521 3.7975 75.509 7.45419 75.6607 14.2026C75.5064 20.9536 84.8521 24.6103 88.4591 18.5969C88.5925 18.6335 88.5794 18.6309 88.7155 18.6675V21.5343H92.5997V6.89444H88.7155V9.73505V9.73766ZM83.5391 18.0973C81.4858 18.0973 79.8222 16.3527 79.8222 14.2026C80.021 9.03667 87.0597 9.03667 87.2559 14.2026C87.2559 16.3527 85.5924 18.0973 83.5391 18.0973Z"
                            fill="#020019" />
                        <path
                            d="M98.6393 8.11817C98.5399 8.08155 98.5372 8.08155 98.4379 8.04493V6.89404H94.4856V21.5339H98.4379V10.4252H104.284V6.89666H101.31C100.243 6.89666 99.2853 7.37009 98.6393 8.12079V8.11817Z"
                            fill="#020019" />
                        <path
                            d="M111.043 10.4253H113.899V6.89679H111.043V4.01172H107.159V6.89417H105.827V10.4227H107.159V18.0055C107.159 19.9542 108.738 21.534 110.687 21.534H115.442V18.0055H111.043V10.4227V10.4253Z"
                            fill="#020019" />
                        <path
                            d="M70.6647 10.4253H73.521V6.89679H70.6647V4.01172H66.7805V6.89417H65.4491V10.4227H66.7805V18.0055C66.7805 19.9542 68.3603 21.534 70.309 21.534H75.0643V18.0055H70.6647V10.4227V10.4253Z"
                            fill="#020019" />
                        <path
                            d="M60.9319 11.2493C59.9719 10.8648 58.7269 10.475 57.2281 10.0931C56.2551 9.8525 55.4756 9.63279 54.9132 9.44184C53.8827 9.05734 52.9358 8.55775 52.9332 7.52195C52.9463 6.71633 53.4223 6.12519 54.3064 5.80608C55.4311 5.38234 57.6074 5.46604 58.5333 6.18012C59.1166 6.57508 59.4985 7.05375 59.6659 7.5978H64.0471C63.5685 5.36142 62.19 3.60369 60.155 2.64113C57.9788 1.52948 54.2646 1.51901 52.0412 2.61236C50.8982 3.14595 50.0141 3.87311 49.4099 4.76243C48.1491 6.50969 48.2041 9.29798 49.5276 10.7314C50.2129 11.503 51.0447 12.0784 51.9942 12.4499C52.9541 12.8239 54.2018 13.2189 55.6979 13.6217C55.8653 13.6635 56.0406 13.7054 56.2315 13.7524C57.8166 14.1343 59.985 14.6627 59.9929 16.1902C59.9929 16.614 59.8647 16.9854 59.611 17.2967C58.8106 18.1781 57.6335 18.3115 56.48 18.322H56.3623C54.3456 18.322 52.737 17.2862 52.1302 15.586H47.7463C48.7115 19.5592 52.2034 22.1513 56.4748 22.0676H56.5219C58.7504 22.0676 61.7558 21.5366 63.4926 19.0256C64.7481 17.2417 64.7037 14.4168 63.3854 12.9756C62.7053 12.204 61.8814 11.6233 60.9345 11.2466L60.9319 11.2493Z"
                            fill="#020019" />
                        <path
                            d="M140.806 2.31689H135.646L131.628 8.16812L130.278 10.1351L128.929 8.16812L124.908 2.31689H119.75L126.347 11.9268L119.75 21.5368H124.908L128.929 15.6829L130.278 13.7159L131.628 15.6829L135.646 21.5368H140.806L134.207 11.9268L140.806 2.31689Z"
                            fill="#020019" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15_487">
                            <rect width="140.722" height="23.0178" fill="white"
                                transform="translate(0.138794 0.229492)" />
                        </clipPath>
                    </defs>
                </svg>
            </nuxt-link>

            <div class="block">
                <el-link underline href="tel:+74996771907">+7 499 677 19 07</el-link>
                <el-tooltip class="box-item" effect="dark" content="Юзер" placement='bottom-end'>
                    <el-button type="primary" :icon="User" circle />
                </el-tooltip>
            </div>
        </div>
        <div class="table">
            <el-card class="card">
                <template #header>
                    <el-text class="title" size="large">Клиент</el-text>
                </template>
                <el-table size="large" :data="tableData" style="width: 100%">
                    <el-table-column prop="companyName" label="Имя компании" width="180" />
                    <el-table-column prop="email" label="Email" width="180" />
                    <el-table-column prop="license.expired" label="Окончание лицензии" width="180" />
                    <el-table-column prop="license.supportExpired" label="Поддержка до" width="180" />
                    <el-table-column prop="license.employeeCount" label="Количество сотрудников в лицензии" />
                    <el-table-column prop="employees" label="Количество сотрудников" />
                    <el-table-column align="right">
                        <template #header>
                            Действия
                        </template>
                        <template #default>
                            <el-button type="primary">Войти</el-button>
                            <el-button type="default">Редактировать</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-card>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.table {
    padding: 30px;
}

.title {
    font-size: 36px;
    font-weight: 600;
}

.header {
    background: #f8f8fd;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.block {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>