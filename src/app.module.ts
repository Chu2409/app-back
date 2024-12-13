import { Module, ValidationPipe } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { APP_PIPE } from '@nestjs/core'
import { UsersModule } from './users/users.module';
import { SemestersModule } from './semesters/semesters.module';
import { SubjectsModule } from './subjects/subjects.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { ResourcesModule } from './resources/resources.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [PrismaModule, UsersModule, SemestersModule, SubjectsModule, EnrollmentsModule, AssignmentsModule, SubmissionsModule, ResourcesModule, SchedulesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
    },
  ],
})
export class AppModule {}
