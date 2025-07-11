import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { DocumentType } from './entities/document-type.entity';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
  ) {}

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.documentTypeRepository.save(createDocumentTypeDto);
  }

  async findAll() {
    return await this.documentTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.documentTypeRepository.findOne({ where: { id } });
  }

  update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return this.documentTypeRepository.update(+id, updateDocumentTypeDto);
  }

  remove(id: number) {
    return this.documentTypeRepository.delete(id);
  }
}
