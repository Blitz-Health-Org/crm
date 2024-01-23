import { ModuleRef } from '@nestjs/core';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { YogaDriverConfig, YogaDriverServerContext } from '@graphql-yoga/nestjs';
import { GraphQLSchemaWithContext, YogaInitialContext } from 'graphql-yoga';
import { TokenService } from 'src/core/auth/services/token.service';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { ExceptionHandlerService } from 'src/integrations/exception-handler/exception-handler.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class GraphQLConfigService implements GqlOptionsFactory<YogaDriverConfig<'express'>> {
    private readonly tokenService;
    private readonly exceptionHandlerService;
    private readonly environmentService;
    private readonly moduleRef;
    constructor(tokenService: TokenService, exceptionHandlerService: ExceptionHandlerService, environmentService: EnvironmentService, moduleRef: ModuleRef);
    createGqlOptions(): YogaDriverConfig;
    createSchema(context: YogaDriverServerContext<'express'> & YogaInitialContext, workspace: Workspace): Promise<GraphQLSchemaWithContext<YogaDriverServerContext<'express'>>>;
}
