import { DocumentType } from '../../document-types/entities/document-type.entity';
import { Project } from '../../projects/entities/project.entity';

export class CreateDocumentDto {
  name: string;
  documentType: DocumentType;
  project: Project;
}
