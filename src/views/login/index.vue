<template>
    <div
        class="
            min-h-screen
            flex flex-col
            items-center
            justify-center
            bg-brand-burack
            py-10
            md:py-0
        "
    >
        <div
            class="
                flex flex-col
                justify-center justify-items-start
                w-36
                md:w-42
                2xl:w-96
            "
        >
            <svg
                class="w-full my-5"
                width="111"
                height="134"
                viewBox="0 0 111 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.7354 32.5602C5.90582 35.6368 -2.13024e-06 44.1433 -1.77177e-06 52.344L-5.45525e-07 80.3973C-1.23246e-07 90.0579 8.09552 95.3561 17.3189 91.7318L97.2646 60.3172C105.094 57.2405 111 48.7341 111 40.5333L111 12.4801C111 2.81945 102.904 -2.47874 93.6811 1.14556L13.7354 32.5602Z"
                    fill="#FFC300"
                />
                <path
                    d="M13.7354 100.637C5.90582 97.517 -1.95658e-06 88.8914 -2.32007e-06 80.5759L-3.45991e-06 54.4993C-3.95719e-06 43.1228 5.59428 34.1041 14.7781 30.6753L24.1304 27.1834C17.4465 28.0617 18.5671 38.6903 25.6614 41.7046L99.6552 73.1437C106.162 75.9085 111 83.1184 111 90.0513L111 120.998C111 130.794 102.904 136.166 93.6811 132.491L13.7354 100.637Z"
                    fill="#8759F2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.9477 29.4499C18.1969 32.7576 20.0756 39.8458 25.6818 42.2127L81.6545 65.8447L17.3326 90.8598C8.10195 94.4497 -1.22075e-07 89.2019 -5.40341e-07 79.6331L-1.61985e-06 54.9367C-1.86725e-06 49.2769 1.40114 44.204 3.95224 40.1203C6.40814 36.6289 9.83771 33.7706 13.7463 32.2505L20.9477 29.4499Z"
                    fill="#FF3E80"
                />
            </svg>
        </div>
        <div
            class="
                w-3/4
                max-w-md
                lg:w-1/4
                space-y-8
                bg-brand-mainBlack
                py-5
                xl:px-10 xl:py-0
                rounded-lg
                shadow-xl
            "
        >
            <div>
                <h2
                    class="
                        text-center text-2xl
                        font-bold
                        text-brand-main
                        tracking-normal
                        xl:mt-5
                    "
                >
                    Login
                </h2>
            </div>
            <form class="mt-8 px-10 xl:p-0">
                <label class="block">
                    <span class="text-md font-medium text-brand-main"
                        >E-mail</span
                    >
                    <input
                        v-model="state.email.value"
                        type="email"
                        class="
                            focus:outline-none focus:border-brand-main
                            text-gray-400
                            transition
                            duration-200
                            ease-in-out
                            block
                            w-full
                            px-4
                            py-3
                            mt-1
                            text-md
                            bg-brand-burack
                            border 
                            rounded
                        "
                        :class="{
                            'border-brand-danger': state.email.errorMessage,
                            'border-brand-burack': !state.email.errorMessage,
                        }"
                        placeholder="jane.doe@gmail.com"
                        required
                    />
                    <span
                        v-if="!!state.email.errorMessage"
                        class="font-medium text-sm text-brand-danger"
                    >
                        {{ state.email.errorMessage }}
                    </span>
                </label>

                <label class="block mt-3">
                    <span class="text-md font-medium text-brand-main"
                        >Senha</span
                    >
                    <input
                        v-model="state.password.value"
                        type="password"
                        :class="{
                            'border-brand-danger': state.password.errorMessage,
                            'border-brand-burack': !state.password.errorMessage,
                        }"
                        class="
                            focus:outline-none focus:border-brand-main
                            text-gray-400
                            transition
                            duration-200
                            ease-in-out
                            block
                            w-full
                            px-4
                            py-3
                            mt-1
                            text-md
                            bg-brand-burack
                            border
                            rounded
                        "
                        placeholder="*********"
                        required
                    />
                    <span
                        v-if="!!state.password.errorMessage"
                        class="block font-medium text-sm text-brand-danger"
                    >
                        {{ state.password.errorMessage }}
                    </span>
                </label>

                <div class="flex flex-col my-3">
                    <div class="text-sm text-right">
                        <router-link
                            :to="{ path: '/forgot_password' }"
                            class="font-medium text-brand-main underline-custom"
                            >Esqueceu sua senha?</router-link
                        >
                    </div>
                </div>

                <div class="w-full xl:pb-6 mt-5">
                    <button
                        type="submit"
                        class="
                            m-auto
                            w-full
                            flex
                            justify-center
                            py-2
                            px-4
                            border border-transparent
                            text-sm
                            font-semibold
                            rounded-md
                            text-white
                            bg-brand-main
                            hover:bg-brand-main
                            focus:outline-none
                            transition
                            duration-500
                            ease-in-out
                            transform
                            motion-safe:hover:scale-105
                        "
                    >
                        <span class="inline-block mr-2 text-base">Entrar</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

import { useField } from 'vee-validate'

import {
    validateEmptyAndLength3,
    validateEmptyAndEmail,
} from '../../utils/validators'

import { useRouter } from 'vue-router'

export default {
    name: 'Home',

    setup() {
        const router = useRouter()

        const { value: emailValue, errorMessage: emailErrorMessage } = useField(
            'email',
            validateEmptyAndEmail
        )

        const { value: passwordValue, errorMessage: passwordErrorMessage } =
            useField('password', validateEmptyAndLength3)

        const state = reactive({
            hasErrors: false,
            isLoading: false,
            email: {
                value: emailValue,
                errorMessage: emailErrorMessage,
            },
            password: {
                value: passwordValue,
                errorMessage: passwordErrorMessage,
            },
        })

        return {
            state,
        }
    },
}
</script>

<style scoped lang="postcss">
.underline-custom {
    position: relative;
}

.underline-custom::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    @apply bg-brand-main;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
    .underline-custom:hover::before {
        left: 0;
        right: auto;
        width: 100%;
    }
}
</style>
