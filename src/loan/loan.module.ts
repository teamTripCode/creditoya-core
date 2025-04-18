import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RedisModule } from 'src/redis/redis.module';
import { MailModule } from 'src/mail/mail.module';
import { PdfsModule } from 'src/pdfs/pdfs.module';
import { GoogleCloudModule } from 'src/gcp/gcp.module';

@Module({
  imports: [
    PrismaModule,
    RedisModule,
    MailModule,
    PdfsModule,
    GoogleCloudModule
  ],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}
