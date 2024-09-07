import { Page } from "@playwright/test";
import { Logger } from "winston";

export const fixtures = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as unknown as Logger
}
