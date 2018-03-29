import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  // This is creation of the custom server object, in server-element component we created blueprint how it should like,
  // and make it available using @Input() decorator


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    //This object will be used when creating an Custom Event
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

}
