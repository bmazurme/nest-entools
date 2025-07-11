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
    document.type = createDocumentDto.documentType;
    document.project = createDocumentDto.project;

    return await this.documentRepository.save(document);
  }

  async findAll() {
    return await this.documentRepository.find({
      relations: ['project'],
    });
  }

  async findOne(id: number) {
    return await this.documentRepository.findOne({ where: { id } });
  }

  async findByProject(projectId: number) {
    return await this.documentRepository.find({
      where: { project: { id: projectId } },
    });
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return this.documentRepository.update(+id, updateDocumentDto);
  }

  remove(id: number) {
    return this.documentRepository.delete(id);
  }
}
