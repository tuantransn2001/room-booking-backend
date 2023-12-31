import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { ClsService } from 'nestjs-cls';

const useFactory = (prisma: PrismaService, store: ClsService) => {
    return prisma.$extends({
        query: {
            $allModels: {
                async $allOperations({ args, query }) {
                    const tenantId = store.get('TENANT_ID');


                    const [, result] = await prisma.$transaction([
                        prisma.$executeRaw`SELECT set_config('tenancy.tenant_id', ${`${tenantId || 0}`}, TRUE)`,
                        query(args),
                    ]);

                    return result;
                },
            },
        },
    });
};

export type ExtendedTenantClient = ReturnType<typeof useFactory>;

export const TENANCY_CLIENT_TOKEN = Symbol('TENANCY_CLIENT_TOKEN');

export const PrismaTenancyClientProvider = {
    provide: TENANCY_CLIENT_TOKEN,
    imports: [PrismaModule],
    inject: [PrismaService, ClsService],
    useFactory
};