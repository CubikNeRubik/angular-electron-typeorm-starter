import * as path from 'path';
import { remote } from 'electron';
import { environment } from '../../../environments/environment';

export class Settings {

    public static dbFolder: string;
    public static dbPath: string;
    public static appPath: string;
    private static dataSubFolder: string;
    private static dbName = 'database.db';

    public static initialize(): void {
        Settings.getPaths();
    }

    private static getPaths() {

        if(environment.production){
            this.dataSubFolder = '/';
            Settings.appPath = remote.app.getPath('userData');
        } else {
            // return folder where app is running
            this.dataSubFolder = 'dist/assets/data';
            Settings.appPath = remote.app.getAppPath();
        }

        Settings.dbFolder = path.join(Settings.appPath, Settings.dataSubFolder);
        Settings.dbPath = path.join(Settings.dbFolder, this.dbName)
    }
}