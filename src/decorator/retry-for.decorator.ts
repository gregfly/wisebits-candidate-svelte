import { sleep } from "src/utils";

export function retryFor(maxRetryAttempts: number, timeoutAttempt: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            for (let attempt = 0; attempt < maxRetryAttempts; ++attempt) {
                try {
                    return await originalMethod.apply(this, args);
                } catch (e) {
                    if (attempt + 1 < maxRetryAttempts) {
                        await sleep(timeoutAttempt);
                    } else {
                        throw e;
                    }
                }
            }
        };
        return descriptor;
    };
}