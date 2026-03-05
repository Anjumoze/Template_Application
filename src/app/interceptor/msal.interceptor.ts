import { MsalInterceptorConfiguration } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>();
    protectedResourceMap.set(environment.authUrl , [environment.authScope]);
    protectedResourceMap.set(environment.chatApiUrl , [environment.authScope]);
    return {
      interactionType: InteractionType.Redirect,
      protectedResourceMap
    };
}

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId: environment.authClientId,
      authority: environment.authority,
      redirectUri: environment.authRedirectURL
    }
  })
}
