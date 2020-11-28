﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { CalidadRequirente } from '../Personas/calidadrequirente.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { Intervencion } from './intervencion.entity';
import { MovimientoCaso } from './movimientocaso.entity';
import { Detencion } from './detencion.entity';
import { SubMateria } from './submateria.entity';
import { RolRequirente } from './rolrequirente.entity';
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CalidadRequirenteModel } from '../Personas/calidadrequirente.model';
import { CasoModel } from './caso.model';
import { IntervencionModel } from './intervencion.model';
import { MovimientoCasoModel } from './movimientocaso.model';
import { DetencionModel } from './detencion.model';
import { SubMateriaModel } from './submateria.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { HistoricoSubmateriaModel } from './historicosubmateria.model';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CalidadRequirenteCollection } from '../Personas/calidadrequirente.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { IntervencionCollection } from './intervencion.collection';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { DetencionCollection } from './detencion.collection';
import { SubMateriaCollection } from './submateria.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
//#endregion

export class RequirenteCasoModel<E extends RequirenteCaso> extends ODataModel<E> {
  //#region ODataApi Properties
  casoId?: number;
  requirenteId?: number;
  key?: string;
  rolRequirenteId?: number;
  ausente?: boolean;
  principalId?: number;
  alternativoId?: number;
  fecha?: Date;
  delitoId?: number;
  otrosDelitos?: string;
  calidadRequirenteId?: number;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  requirente?: RequirenteModel<Requirente>;
  rolRequirente?: RolRequirenteModel<RolRequirente>;
  principal?: EmpleadoModel<Empleado>;
  alternativo?: EmpleadoModel<Empleado>;
  delito?: SubMateriaModel<SubMateria>;
  calidadRequirente?: CalidadRequirenteModel<CalidadRequirente>;
  historicoAbogadoPersonas?: HistoricoAbogadoPersonaCollection<HistoricoAbogadoPersona, HistoricoAbogadoPersonaModel<HistoricoAbogadoPersona>>;
  historicoSubmaterias?: HistoricoSubmateriaCollection<HistoricoSubmateria, HistoricoSubmateriaModel<HistoricoSubmateria>>;
  movimientosCaso?: MovimientoCasoCollection<MovimientoCaso, MovimientoCasoModel<MovimientoCaso>>;
  intervenciones?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  detenciones?: DetencionCollection<Detencion, DetencionModel<Detencion>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}