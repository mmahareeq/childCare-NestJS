import { Module } from '@nestjs/common';
import { CaregiverController } from './caregiver/caregiver.controller';
import { CaregiverService } from './caregiver/caregiver.service';
import { CaregiverController } from './caregiver.controller';
import { CaregiverService } from './caregiver.service';

@Module({
  controllers: [CaregiverController],
  providers: [CaregiverService]
})
export class CaregiverModule {}
