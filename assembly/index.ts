import { Context, storage } from "near-sdk-as";

class Greeting {
  getGreeting(accountId: string): string | null {
    return storage.get<string>(accountId, "Greeting Not Available");
  }

  setGreeting(greeting: string): void {
    storage.set(Context.sender, greeting);
  }
}
