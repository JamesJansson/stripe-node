// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountSessionCreateParams {
      /**
       * The identifier of the account to create an Account Session for.
       */
      account: string;

      /**
       * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not, its corresponding features, etc.).
       */
      components: AccountSessionCreateParams.Components;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace AccountSessionCreateParams {
      interface Components {
        /**
         * Configuration for the account onboarding embedded component.
         */
        account_onboarding?: Components.AccountOnboarding;

        /**
         * Configuration for the payment details embedded component.
         */
        payment_details?: Components.PaymentDetails;

        /**
         * Configuration for the payments embedded component.
         */
        payments?: Components.Payments;

        /**
         * Configuration for the payouts embedded component.
         */
        payouts?: Components.Payouts;
      }

      namespace Components {
        interface AccountOnboarding {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;
        }

        interface PaymentDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;
        }

        interface Payments {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;
        }

        interface Payouts {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;
        }
      }
    }

    class AccountSessionsResource {
      /**
       * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
       */
      create(
        params: AccountSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountSession>>;
    }
  }
}
