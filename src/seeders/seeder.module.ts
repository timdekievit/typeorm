/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [MysqlDatabaseProviderModule, LanguageSeederModule],
  providers: [MysqlSeederService, Logger, Seeder],
})
export class SeederModule {}
