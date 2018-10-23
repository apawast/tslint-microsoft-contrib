/**
 * Interface of role.
 */
export interface IRole {
    requiredProps: string[];
    additionalSupportedProps: string[];
    isAbstract: boolean;
}

/**
 * Interface of role schema.
 */
export interface IRoleSchema {
    roles: { [key: string]: IRole };
    globalSupportedProps: string[];
}
