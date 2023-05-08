export interface IQuery {
    index(): string | Promise<string>;
    securedResource(): string | Promise<string>;
    securedDatForAdmin(): string | Promise<string>;
    securedDataForNormalUser(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
}
