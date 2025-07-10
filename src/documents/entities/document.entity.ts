import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Project } from '../../projects/entities/project.entity';
import { DocumentType } from '../../document-types/entities/document-type.entity';
import { Block } from '../../blocks/entities/block.entity';

@Entity()
export class Document extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => Project, (project) => project.documents)
  project: Project;

  @ManyToOne(() => DocumentType, (type) => type.documents, {
    nullable: false,
  })
  @JoinColumn({ name: 'typeId' })
  type: DocumentType;

  @OneToMany(() => Block, (block) => block.document)
  blocks: Block[];
}
