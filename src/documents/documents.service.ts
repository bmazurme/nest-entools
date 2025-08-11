import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    const document = new Document();
    document.name = createDocumentDto.name;
    document.type = createDocumentDto.type;
    document.project = createDocumentDto.project;

    return await this.documentRepository.save(document);
  }

  async findAll() {
    return await this.documentRepository.find({
      relations: ['project'],
    });
  }

  async findOne(id: number) {
    return await this.documentRepository.findOne({
      where: { id },
      relations: ['blocks', 'blocks.items', 'type'],
      select: {
        id: true,
        name: true,
        type: {
          id: true,
        },
      },
    });
  }

  async findByProject(projectId: number) {
    return await this.documentRepository.find({
      where: {
        project: {
          id: projectId,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    await this.documentRepository.update(+id, updateDocumentDto);

    return await this.documentRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return this.documentRepository.delete(id);
  }
}
