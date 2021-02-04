import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/loanManagerTab/index.html")
@PreventIframe("/loanManagerTab/config.html")
@PreventIframe("/loanManagerTab/remove.html")
export class LoanManagerTab {
}
