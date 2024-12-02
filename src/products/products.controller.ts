import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/role.decorator';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('products')
@UseGuards(AuthGuard, RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  create(@Body() createProtuctDto: CreateProductDto) {
    return new HttpException("Criado com sucesso", HttpStatus.CREATED)
  }

  @Roles(Role.Admin)
  @Get('allProduct')
  findAll() {
    return new HttpException("Retornando todos os produtos", HttpStatus.FOUND)
  }

  @Roles(Role.Admin)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return new HttpException("Retornando produto especifico", HttpStatus.FOUND)
  }

  @Roles(Role.Admin)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return new HttpException("Removido", HttpStatus.OK)
  }
  
}
