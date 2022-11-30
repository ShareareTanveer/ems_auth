import { DataSource,DataSourceOptions } from "typeorm";


export const dataSourceOptions:DataSourceOptions={
  type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tanveer',
      database: 'ems',
      "entities": ["dist/**/*.entity{.ts,.js}"],
      //"migrations": ["src/migrations/*{.ts,.js}"],
      "migrations" : ["dist/src/migrations/*{.js,.ts}"],
      //migrations: ['src/migrations/*{.ts,.js}'],
      synchronize: false,
}

const dataSource=new DataSource(dataSourceOptions);
export default dataSource;