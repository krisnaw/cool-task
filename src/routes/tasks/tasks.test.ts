
import { describe, expect, expectTypeOf, it } from "vitest"
import router from "./tasks.index"
import { createTestApp } from "@/lib/create-app"

describe("Tasks list", () => {
    it("responds with array", async () => {
        const testRouter = createTestApp(router);
        const response = await testRouter.request('/tasks')
        const result = await response.json()
        console.log(result)
        // @ts-expect-error
        expectTypeOf(result).toBeArray()
    })
})