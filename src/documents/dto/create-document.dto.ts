import { Type } from '../../types/entities/type.entity';
import { Project } from '../../projects/entities/project.entity';

export class CreateDocumentDto {
  name: string;
  type: Type;
  project: Project;
}
