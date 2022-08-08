import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";

import { Command, ExecutionContext, DataItem } from "@progress/sitefinity-adminapp-sdk/app/api/v1";

/**
 * Serves as a command that gets invoked when the notification action button is clicked
 */
@Injectable()
export class NotificationCommand implements Command {
    constructor(protected router: Router) { }

    /**
     * This method gets invoked when the notification action button is clicked
     * @param context The context that contains the data item and the custom properties from the CommandProvider.
     */
    execute(context: ExecutionContext): Observable<any> {
        // get the data item from the context.
        const dataItem: DataItem = context.data.dataItem;
        var url = "";
        
        if (dataItem.metadata.typeFullName == "Telerik.Sitefinity.DynamicTypes.Model.FujitsuModules.MarketingAsset") {
            url = `/partner-portal/marketing/personalise-asset/admin?id=` + dataItem.key + "&provider=" + dataItem.provider;
        }
        else if (dataItem.metadata.typeFullName == "Telerik.Sitefinity.DynamicTypes.Model.FujitsuModules.PartnerNews") {
            url = `/partner-portal/news/notify?id=` + dataItem.key + "&provider=" + dataItem.provider;
        }

       
        window.open(url, "_blank");
        
        // publish a notification
        // const notificationInfo: NotificationInfo = {
        //     message: `Notification command executed on item: ${dataItem.title}`,
        //     look: NOTIFICATION_LOOK_SUCCESS,
        //     duration: 7000,
        //     filterParam: "item-edit"
        // };

       // this.notificationService.publishBasicNotification(notificationInfo);

        return of({});
    }
}
