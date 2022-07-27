import { ObjectFactory } from 'typescript-ioc';

const baseUrl: string = process.env.SERVICE_URL || 'http://localhost:7765';

export const stockItemConfigFactory: ObjectFactory = () => ({
    baseUrl,
});