import { ClassProvider, Injectable } from "@angular/core";
import { SystemNotificationIconProvider, SYSTEM_NOTIFICATION_ICON_TOKEN } from "@progress/sitefinity-adminapp-sdk/app/api/v1";

const DEFAULT_ICON = "check";
const FIRST_CUSTOM_ICON = "user";
const VIDEO_PUBLISHED_ICON = "film";
const NEW_FORM_RESPONSE_ICON = "form-response";

@Injectable()
export class CustomNotificationIconProvider implements SystemNotificationIconProvider {
    parseIcon(key: string): string {
        switch (key) {
            // custom icons
            case "user-created":
                return FIRST_CUSTOM_ICON;
            case "video-published":
                return VIDEO_PUBLISHED_ICON;
            // override the default form resoinse notification icon
            case "subscribed-responses":
                return NEW_FORM_RESPONSE_ICON;
            // override the default icon
            default:
                return DEFAULT_ICON;
        }
    }
}

export const CUSTOM_NOTIFICATION_ICON_PROVIDER: ClassProvider = {
    multi: true,
    provide: SYSTEM_NOTIFICATION_ICON_TOKEN,
    useClass: CustomNotificationIconProvider
};
