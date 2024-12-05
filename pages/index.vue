<template>
    <div class="bg-white h-screen">
        <Head>
            <Title>Home</Title>
        </Head>
        <main>
            <div class="relative isolate overflow-hidden bg-gray-900 h-screen">
                <NuxtImg src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                Secure and reliable payment processing. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Learn more <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                        <div class="text-center">
                            <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">Simplifying Payment Solutions for Your Business</h1>
                            <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Seamless payment gateway integration with top-notch security. Accept payments online from anywhere, at any time.</p>
                            <div class="mt-10 flex items-center justify-center gap-x-6">
                                <NuxtLink href="/deposit" class="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400">Deposit</NuxtLink>
                                <NuxtLink href="/withdrawal" class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">Withdrawal</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
