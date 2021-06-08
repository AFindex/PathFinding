export default "@export clay.deferred.depth.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\n@import clay.chunk.skinning_header\nvarying vec4 v_ProjPos;\nvoid main(){\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n v_ProjPos = worldViewProjection * vec4(skinnedPosition, 1.0);\n gl_Position = v_ProjPos;\n}\n@end\n@export clay.deferred.depth.fragment\nvarying vec4 v_ProjPos;\n@import clay.util.encode_float\nvoid main()\n{\n float depth = v_ProjPos.z / v_ProjPos.w;\n gl_FragColor = encodeFloat(depth * 0.5 + 0.5);\n}\n@end";
