"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Building2, MapPin, CreditCard, FileText, Save, X } from "lucide-react"

interface AddSupplierModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddSupplierModal({ open, onOpenChange }: AddSupplierModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Información básica
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    alternativePhone: "",

    // Dirección
    address: "",
    city: "",
    postalCode: "",
    country: "España",

    // Información comercial
    category: "",
    taxId: "",
    paymentTerms: "",
    discount: "",
    minimumOrder: "",

    // Información bancaria
    bankName: "",
    accountNumber: "",
    iban: "",
    swift: "",

    // Notas
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de envío
    setTimeout(() => {
      console.log("Nuevo proveedor:", formData)
      setIsLoading(false)
      onOpenChange(false)
      // Aquí resetearías el formulario
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        alternativePhone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "España",
        category: "",
        taxId: "",
        paymentTerms: "",
        discount: "",
        minimumOrder: "",
        bankName: "",
        accountNumber: "",
        iban: "",
        swift: "",
        notes: "",
      })
    }, 2000)
  }

  const handleCancel = () => {
    onOpenChange(false)
    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      alternativePhone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "España",
      category: "",
      taxId: "",
      paymentTerms: "",
      discount: "",
      minimumOrder: "",
      bankName: "",
      accountNumber: "",
      iban: "",
      swift: "",
      notes: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-primary-500" />
            Agregar Nuevo Proveedor
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Completa la información del proveedor para agregarlo a tu base de datos.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Básica */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-semibold text-foreground">Información Básica</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground">
                  Nombre de la Empresa *
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Ej: TechSupply Corp"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-foreground">
                  Persona de Contacto *
                </Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                  placeholder="Ej: María González"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Correo Electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="contacto@empresa.com"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Teléfono Principal *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+34 912 345 678"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alternativePhone" className="text-foreground">
                  Teléfono Alternativo
                </Label>
                <Input
                  id="alternativePhone"
                  value={formData.alternativePhone}
                  onChange={(e) => handleInputChange("alternativePhone", e.target.value)}
                  placeholder="+34 913 456 789"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-foreground">
                  Categoría *
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="bg-muted/50 border-border text-foreground">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electrónicos</SelectItem>
                    <SelectItem value="office">Oficina</SelectItem>
                    <SelectItem value="mobile">Móviles</SelectItem>
                    <SelectItem value="computers">Computadoras</SelectItem>
                    <SelectItem value="accessories">Accesorios</SelectItem>
                    <SelectItem value="furniture">Mobiliario</SelectItem>
                    <SelectItem value="other">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Dirección */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-semibold text-foreground">Dirección</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address" className="text-foreground">
                  Dirección Completa *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Calle Mayor 123, 2º Piso"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-foreground">
                  Ciudad *
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Madrid"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode" className="text-foreground">
                  Código Postal *
                </Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="28001"
                  className="bg-muted/50 border-border text-foreground"
                  required
                />
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Información Comercial */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-semibold text-foreground">Información Comercial</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="taxId" className="text-foreground">
                  NIF/CIF
                </Label>
                <Input
                  id="taxId"
                  value={formData.taxId}
                  onChange={(e) => handleInputChange("taxId", e.target.value)}
                  placeholder="B12345678"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentTerms" className="text-foreground">
                  Términos de Pago
                </Label>
                <Select
                  value={formData.paymentTerms}
                  onValueChange={(value) => handleInputChange("paymentTerms", value)}
                >
                  <SelectTrigger className="bg-muted/50 border-border text-foreground">
                    <SelectValue placeholder="Selecciona términos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Pago inmediato</SelectItem>
                    <SelectItem value="15days">15 días</SelectItem>
                    <SelectItem value="30days">30 días</SelectItem>
                    <SelectItem value="45days">45 días</SelectItem>
                    <SelectItem value="60days">60 días</SelectItem>
                    <SelectItem value="90days">90 días</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="discount" className="text-foreground">
                  Descuento (%)
                </Label>
                <Input
                  id="discount"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.discount}
                  onChange={(e) => handleInputChange("discount", e.target.value)}
                  placeholder="5"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minimumOrder" className="text-foreground">
                  Pedido Mínimo (€)
                </Label>
                <Input
                  id="minimumOrder"
                  type="number"
                  min="0"
                  value={formData.minimumOrder}
                  onChange={(e) => handleInputChange("minimumOrder", e.target.value)}
                  placeholder="500"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Información Bancaria */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-semibold text-foreground">Información Bancaria</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName" className="text-foreground">
                  Nombre del Banco
                </Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleInputChange("bankName", e.target.value)}
                  placeholder="Banco Santander"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountNumber" className="text-foreground">
                  Número de Cuenta
                </Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                  placeholder="1234567890"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="iban" className="text-foreground">
                  IBAN
                </Label>
                <Input
                  id="iban"
                  value={formData.iban}
                  onChange={(e) => handleInputChange("iban", e.target.value)}
                  placeholder="ES91 2100 0418 4502 0005 1332"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="swift" className="text-foreground">
                  Código SWIFT
                </Label>
                <Input
                  id="swift"
                  value={formData.swift}
                  onChange={(e) => handleInputChange("swift", e.target.value)}
                  placeholder="BSCHESMM"
                  className="bg-muted/50 border-border text-foreground"
                />
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Notas */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-semibold text-foreground">Notas Adicionales</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-foreground">
                Observaciones
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Información adicional sobre el proveedor, condiciones especiales, etc."
                className="bg-muted/50 border-border text-foreground min-h-[100px]"
                rows={4}
              />
            </div>
          </div>
        </form>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isLoading}
            className="border-border text-muted-foreground hover:bg-muted/50 bg-transparent"
          >
            <X className="w-4 h-4 mr-2" />
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Guardando...
              </div>
            ) : (
              <div className="flex items-center">
                <Save className="w-4 h-4 mr-2" />
                Guardar Proveedor
              </div>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
