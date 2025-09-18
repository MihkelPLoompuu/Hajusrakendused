<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output encoding="UTF-8" method="text" />
	<xsl:template match="/">
			<xsl:for-each select="autod/auto">
					<xsl:value-of select="concat(substring(registrinumber,1,3),' ')"/>
			</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
